import React from "react";
import { Skeleton } from "./Skeleton";

const LoadingSkeleton = () => (
    <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
            <div>
                <div>
                    <Skeleton className="w-[160px] max-w-full" />
                </div>
                <div>
                    <Skeleton className="w-[5768px] h-[150px] max-w-full" />
                </div>
                <div className="flex gap-4 items-center justify-items-center flex-col sm:flex-row my-5">
                    <div className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:border-transparent sm:text-basesm:h-10 px-3 py-2 w-full sm:w-auto">
                        <Skeleton className="w-[144px] max-w-full" />
                    </div>
                    <div className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:border-transparent sm:text-basesm:h-10 px-3 py-2 w-full sm:w-auto">
                        <Skeleton className="w-[144px] max-w-full" />
                    </div>
                </div>
            </div>
        </div>
    </main>
);
export default LoadingSkeleton;
