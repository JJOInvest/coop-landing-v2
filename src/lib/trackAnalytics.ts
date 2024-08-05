type DataLayerKeys = 'event' | 'eventCategory' | 'eventAction' | 'eventLabel';
type DataLayerEvent = Record<DataLayerKeys, string>;

type YandexMetrikaEvent = {
  counterId: number;
  eventName: string;
  target: string;
};

export function trackAnalytics(gaEvent: DataLayerEvent, ymEvent: YandexMetrikaEvent): void {
  if (window) {
    if (window.dataLayer && !window.dataLayer.some((e) => e.event === gaEvent.event)) {
      window.dataLayer.push(gaEvent);
    }
    if (window.ym && !window.ym.a.some((e: string[]) => e[2] === ymEvent.target)) {
      const { counterId, eventName, target } = ymEvent;
      window.ym(counterId, eventName, target);
    }
  }
}
