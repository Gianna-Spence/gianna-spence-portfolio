export type NavigationItem = {
  number: string;
  label: string;
  path: string;
};

export const navigationItems: NavigationItem[] = [
  { number: "01", label: "HOME", path: "/" },
  { number: "02", label: "ABOUT", path: "/about" },
  { number: "03", label: "WORK", path: "/work" },
  { number: "04", label: "EXPERTISE", path: "/expertise" },
  { number: "05", label: "RÉSUMÉ", path: "/resume" },
  { number: "06", label: "CONTACT", path: "/contact" },
];

export function isNavigationItemActive(pathname: string, item: NavigationItem) {
  return item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);
}