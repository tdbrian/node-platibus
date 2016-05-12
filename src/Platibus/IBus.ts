import {SendOptions} from "./SendOptions";
import {ISentMessage} from "./ISentMessage";
import {EndpointName} from "./EndpointName";
import {IEndpointCredentials} from "./IEndpointCredentials";
import {TopicName} from "./TopicName";

export interface IBus {
	send(content: Object, options: SendOptions): Promise<ISentMessage>;
	send(content: Object, endpointName: EndpointName, options: SendOptions): Promise<ISentMessage>;
	send(content: Object, endpointAddress: string, credentials: IEndpointCredentials, options: SendOptions): Promise<ISentMessage>;
	publish(content: Object, topic: TopicName): Promise<void>;
}
