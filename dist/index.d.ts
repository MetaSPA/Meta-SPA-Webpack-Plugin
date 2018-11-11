import { Compiler } from "webpack";
export interface IOptions {
    namespace: string;
    provide: {
        module: string;
        symbol: string;
    }[];
}
declare class MetaSPAPlugin {
    private options;
    apply(compiler: Compiler): void;
}
export default MetaSPAPlugin;
