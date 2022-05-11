import { EventBus } from "../src/index"

console.log('loading event bus version [AIV]{version}[/AIV]...')

// Hack to get the Map class back...
if(typeof(Map) !== 'function') {
    const frame = document.createElement('iframe')
    const tab = document.getElementById('tab_content_main_output')
    tab?.appendChild(frame)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line no-global-assign
    Map = frame.contentWindow.Map
    tab?.removeChild(frame)
}

const eventBus = new EventBus();

eventBus.subscribe('onGMCP', async (argument: {gmcp_method: string, gmcp_args: unknown}) => {
    await eventBus.raise(argument.gmcp_method, argument.gmcp_args);
})

export default eventBus;

console.log('event bus loaded.')