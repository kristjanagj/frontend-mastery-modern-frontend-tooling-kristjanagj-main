const webpackConfig = require('../webpack.config');

describe('Webpack Configuration - Task 5', () => {
    it('should include @babel/preset-react in babel-loader options', () => {
        const rule = webpackConfig.module.rules.find(r => r.use.loader && r.use.loader.includes('babel-loader'));
        expect(rule.use.options.presets).toContainEqual(expect.stringContaining('@babel/preset-react'));
    });

    it('should have a JSX/JS entry point for React', () => {
        expect(webpackConfig.entry).toMatch(/.*sx?$/); // Check if the entry point is a .js or .jsx file
    });
});
