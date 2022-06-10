import { GetServerSidePropsContext, GetServerSidePropsResult } from "next/types";
declare type UseFunction = (ctx: GetServerSidePropsContext, props: any) => Promise<ComposeResult>;
declare type ComposeResult = {
    break: boolean;
} | GetServerSidePropsResult<any>;
export declare const composeServerSideProps: (...use: UseFunction[]) => (ctx: GetServerSidePropsContext) => Promise<{
    notFound: boolean;
    redirect?: undefined;
    props?: undefined;
} | {
    redirect: any;
    notFound?: undefined;
    props?: undefined;
} | {
    props: {};
    notFound?: undefined;
    redirect?: undefined;
}>;
export {};
