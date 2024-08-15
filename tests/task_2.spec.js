const webpackConfig = require('../webpack.config');

describe('Webpack Configuration - Task 2', () => {
    it('should have an entry point defined', () => {
        expect(webpackConfig.entry).toBeDefined();
    });

    it('should define an output configuration', () => {
        expect(webpackConfig.output).toBeDefined();
        expect(webpackConfig.output.filename).toEqual(expect.any(String));
        expect(webpackConfig.output.path).toEqual(expect.any(String));
    });

    it('should set mode to production', () => {
        expect(webpackConfig.mode).toBeDefined();
    });
});
