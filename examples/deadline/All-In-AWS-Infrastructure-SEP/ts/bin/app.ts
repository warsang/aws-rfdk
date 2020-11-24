#!/usr/bin/env node
/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import 'source-map-support/register';
import * as path from 'path';
import * as pkg from '../package.json';
import * as cdk from '@aws-cdk/core';
import { SEPStack } from '../lib/sep-stack';

// ------------------- //
// --- Application --- //
// ------------------- //

const env = {
  account: process.env.CDK_DEPLOY_ACCOUNT ?? process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION ?? process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();


new SEPStack(app, 'SEPStack', {
  env,
  dockerRecipesStagePath: path.join(__dirname, '..', pkg.config.stage_path), // Stage directory in config is relative, make it absolute
});