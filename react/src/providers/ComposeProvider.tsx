import {
    Fragment,
    JSXElementConstructor,
    PropsWithChildren,
    ReactNode,
  } from 'react';

  interface IComposeProvider {
    components: Array<JSXElementConstructor<PropsWithChildren<unknown>>>;
    children: ReactNode;
  }

  const ComposeProvider = (props: IComposeProvider) => {
    const { components = [], children } = props;

    return (
      <Fragment>
        {components.reduceRight((accumulator, Component) => {
          return <Component>{accumulator}</Component>;
        }, children)}
      </Fragment>
    );
  };
  export default ComposeProvider;
