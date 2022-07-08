declare module "@nuxt/schema" {
  interface RuntimeConfig {
    foo: string;
    public: {
      foo: string;
    };
  }
}

export {};
