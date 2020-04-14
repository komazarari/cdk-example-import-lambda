#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkExampleImportLambdaStack } from '../lib/cdk-example-import-lambda-stack';

const app = new cdk.App();
new CdkExampleImportLambdaStack(app, 'CdkExampleImportLambdaStack');
