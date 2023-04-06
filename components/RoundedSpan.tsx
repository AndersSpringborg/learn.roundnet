export const RoundedSpan = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <span className={"px-2 py-1 text-xs font-semibold rounded-full " + className}>
    {children}
  </span>
);
