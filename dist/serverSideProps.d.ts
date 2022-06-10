import { GetServerSidePropsContext, GetServerSidePropsResult } from "next/types";
declare type UseFunction = (ctx: GetServerSidePropsContext, props: any) => Promise<GetServerSidePropsResult<any>>;
export declare const composeServerSideProps: (ctx: GetServerSidePropsContext) => (...use: UseFunction[]) => {
    props: {};
};
export {};
