
export abstract class HttpAdapter {
    // <T> = generico
    abstract get<T>( url: string, options?: Record<string,unknown> ): Promise<T>;
    // abstract get( url: string, options?: any ): Promise<any>;
}