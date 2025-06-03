export interface Photo {
  id: number;
  url: string;
  caption: {
    pt: string;
    fr: string;
  };
  alt: {
    pt: string;
    fr: string;
  };
}

export interface TimelineEvent {
  id: number;
  date: {
    pt: string;
    fr: string;
  };
  title: {
    pt: string;
    fr: string;
  };
  description: {
    pt: string;
    fr: string;
  };
  icon: string;
}

export interface MessageProps {
  message: string;
  sender: string;
}

export type Language = 'pt' | 'fr';