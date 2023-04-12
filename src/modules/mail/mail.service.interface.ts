export interface IAttachments {
    filename: string;
    path: string;
    cid: string;
  }
  
  export interface IAddress {
    email: string;
    name: string;
  }
  
  export interface IMessage {
    to: {
      email: string[];
      name: string;
    };
    template?: string;
    from: IAddress;
    subject: string;
    context?: any;
    body?: string;
    attachments?: IAttachments[];
  }
  
  export interface IMailService {
    sendMail(message: IMessage): Promise<void>;
  }
  