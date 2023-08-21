import type { DocumentContext } from '../../page';
import { getElement } from '../general/getElement';
import type { SelectorOrElement } from '../types';
import type { ElementHandle } from 'puppeteer-core';

/**
 * Gets parent element of defined element.
 * @param context Page or Frame
 * @param elementOrSelector Element or selector
 *
 * @category Element Actions
 */
export async function getParent(
  context: DocumentContext,
  elementOrSelector: SelectorOrElement,
) {
  const element = await getElement(context, elementOrSelector);
  return element
    .$x('..')
    .then((els) => els[0])
    .then((res) => res as ElementHandle<Element>);
}
