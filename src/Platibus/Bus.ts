import {IBus} from './IBus';
import {SendOptions} from "./SendOptions";
import {ISentMessage} from './ISentMessage';
import {EndpointName} from "./EndpointName";
import {IEndpointCredentials} from "./IEndpointCredentials";
import {TopicName} from "./TopicName";

export class Bus implements IBus {

	public send(content: Object, options = new SendOptions()): Promise<ISentMessage> {
		return new Promise<ISentMessage>((resolve, reject) => {

		});
	}

	public sendEndpointName(content: Object, endpointName: EndpointName, options = new SendOptions()): Promise<ISentMessage> {
		return new Promise<ISentMessage>((resolve, reject) => {

		});
	}

	public sendToEndpoint(content: Object, endpointAddress: string, credentials: IEndpointCredentials, options = new SendOptions()): Promise<ISentMessage> {
		return new Promise<ISentMessage>((resolve, reject) => {

		});
	}

	public publish(content: Object, topic: TopicName): Promise<void> {
		return new Promise<void>((resolve, reject) => {

		});
	}
}
