import { Compiler, ExternalsObjectElement } from "webpack";

export interface IOptions {
    namespace: string;
    provide: {
        module: string;
        symbol: string;
    }[];
}

class MetaSPAPlugin {
    private options: IOptions = {
        namespace: "default",
        provide: []
    };
    constructor(options: IOptions) {
        const { namespace = "default", provide = [] } = options;
        this.options = { namespace, provide };
    }
    apply(compiler: Compiler) {
        compiler.options.target = "web";
        if (!compiler.options.output) {
            compiler.options.output = {};
        }
        if (!compiler.options.externals) {
            compiler.options.externals = {};
        }
        compiler.options.output.libraryTarget = "jsonp";
        compiler.options.output.library = `metaSPALoad({namespace: '${
            this.options.namespace
        }'})`;
        compiler.options.output.jsonpFunction = `metaSPAJsonp${
            this.options.namespace
        }`;
        if (!compiler.options.externals) compiler.options.externals = {};
        this.options.provide.forEach(({ module, symbol }) => {
            (compiler.options.externals as ExternalsObjectElement)[
                module
            ] = `metaSPAProvider.${symbol}`;
        });
    }
}

export default MetaSPAPlugin;
