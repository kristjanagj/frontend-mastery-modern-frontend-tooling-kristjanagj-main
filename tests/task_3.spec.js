const webpackConfig = require('../webpack.config');

describe('Webpack Configuration - Task 3', () => {
    it('should include babel-loader in module rules', () => {
        const rule = webpackConfig.module.rules.find(r => r.use && r.use.loader.includes('babel-loader'));
        expect(rule).toBeDefined();
    });

    it('should target IE 11 in babel-loader options', () => {
        const rule = webpackConfig.module.rules.find(r => r.use && r.use.loader.includes('babel-loader'));
        expect(rule.use.options.presets).toContainEqual(expect.arrayContaining([expect.stringContaining('@babel/preset-env'), { targets: 'IE 11' }]));
    });
});
