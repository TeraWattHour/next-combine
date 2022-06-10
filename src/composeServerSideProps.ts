import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next/types";
import _ from "lodash";

type UseFunction = (
  ctx: GetServerSidePropsContext,
  props: any
) => Promise<ComposeResult>;

type ComposeResult =
  | {
      break: boolean;
    }
  | GetServerSidePropsResult<any>;

export const composeServerSideProps = (...use: UseFunction[]) => {
  const handler = async (ctx: GetServerSidePropsContext) => {
    let p = {};

    for (const useFn of use) {
      const result: any = await useFn(ctx, p);
      if (result.notFound) {
        return { notFound: true };
      }
      if (result.redirect) {
        return { redirect: result.redirect };
      }
      p = _.merge(p, result.props);

      if (result.break) {
        return { props: p };
      }
    }

    return { props: p };
  };
  return handler;
};
