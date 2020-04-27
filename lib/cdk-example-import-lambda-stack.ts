import * as cdk from '@aws-cdk/core';
import * as myfunc from '@komazarari/cdk-example-lambda-with-layer';

export class CdkExampleImportLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new myfunc.CdkExampleLambdaWithLayer(this, 'myFunc', { myMessage: 'Imported!'});
  }
}
