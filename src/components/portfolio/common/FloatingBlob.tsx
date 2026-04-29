type FloatingBlobProps = {
  className: string;
};

export function FloatingBlob({ className }: FloatingBlobProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl opacity-30 ${className} animate-pulse`}
    />
  );
}
