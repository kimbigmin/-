import SuspenseLoading from './SuspenseLoading';
import React, { Suspense } from 'react';

function LazyContainer({compURL}: {compURL: string}) {
    const LazyComp = React.lazy(() => import(`../pages/index`));
    return (
        <div>
            <Suspense fallback={<SuspenseLoading />}>
                <LazyComp />
            </Suspense>
        </div>
    )
}

export default LazyContainer;