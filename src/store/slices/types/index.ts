export type ImageProps = {
  type: 'url' | 'file';
  data: string;
  mediaType?: string;
} | null;

export type GeneratorProps = {
  prompt: {
    message: string;
    image: ImageProps;
    examples: string | null;
  };
  systemMessage: string;
  output: string | null;
  isLoading: boolean;
};
