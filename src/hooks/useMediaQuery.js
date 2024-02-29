import { useEffect, useMemo, useState } from "react";

export default function useMediaQuery(query) {
  const mediaQueryList = useMemo(() => window.matchMedia(query), [query]);
  const [matches, setMatches] = useState(mediaQueryList.matches);

  useEffect(() => {
    const handleChange = (e) => setMatches(e.matches);

    mediaQueryList.addEventListener("change", handleChange);

    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, [mediaQueryList]);

  return matches;
}
