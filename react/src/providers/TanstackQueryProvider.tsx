import { PropsWithChildren } from "react";

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

const TanstackQueryProvider = ({ children }: PropsWithChildren) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

};

export default TanstackQueryProvider;
