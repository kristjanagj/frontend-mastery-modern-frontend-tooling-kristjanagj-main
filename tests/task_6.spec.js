const webpackConfig = require('../webpack.config');

describe('Webpack Configuration - Task 6', () => {
    it('should include ts-loader for TypeScript files', () => {
        const tsRule = webpackConfig.module.rules.find(r => r.test && r.test.toString().includes('tsx?$'));
        expect(tsRule).toBeDefined();
        expect(tsRule.use).toEqual('ts-loader');
    });
});
