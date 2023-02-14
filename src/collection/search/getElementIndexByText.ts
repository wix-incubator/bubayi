import type { SelectorOrElements } from '../../element';
import { DocumentContext } from '../../page';
import { getElements } from '../../element';

export async function getElementIndexByText(
  context: DocumentContext,
  elements: SelectorOrElements,
  text: string,
  ignoreCase = false,
): Promise<number> {
  const targetElements = await getElements(context, elements);
  const textOptions = await Promise.all(
    targetElements.map((option) =>
      context.evaluate(
        (e) => (e.innerText ? e.innerText : e.innerHtml),
        option,
      ),
    ),
  );
  return ignoreCase
    ? textOptions.map((opt) => opt.toLowerCase()).indexOf(text.toLowerCase())
    : textOptions.indexOf(text);
}
