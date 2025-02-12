export const useClass = () => {
  const attrs = useAttrs();
  return computed<string>(() => (attrs.class as string | null) || "");
};
