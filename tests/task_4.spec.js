const webpackConfig = require('../webpack.config');

describe('Webpack Configuration - Task 4', () => {
    it('should include HtmlWebpackPlugin', () => {
        const plugins = webpackConfig.plugins.map(p => p.constructor.name);
        expect(plugins).toContain('HtmlWebpackPlugin');
    });

    it('should use content hash in output filename for cache busting', () => {
        expect(webpackConfig.output.filename).toMatch(/\[contenthash\].bundle.js/);
    });
});
