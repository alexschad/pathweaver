const Skeleton = ({ className }: { className: string }) => (
    <div aria-live="polite" aria-busy="true" className={className}>
        <span className="inline-flex w-full h-full animate-pulse select-none rounded-md bg-gray-300 leading-none">
            ‌
        </span>
        <br />
    </div>
);

const SVGSkeleton = ({ className }: { className: Text }) => (
    <svg className={className + " animate-pulse rounded bg-gray-300"} />
);

export { Skeleton, SVGSkeleton };
