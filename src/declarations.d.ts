declare const graphql: (query: TemplateStringsArray) => void;

declare module "gatsby-plugin-google-analytics" {
  export const OutboundLink: React.ComponentClass<
    React.AnchorHTMLAttributes<any>
  >;
}
