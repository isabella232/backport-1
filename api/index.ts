import { toLambda } from "probot-serverless-now";

import { applicationFunction } from "./_app/app";

export = toLambda(applicationFunction);
