import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * The `cn` function takes in multiple class names as arguments and returns a merged string of those
 * class names.
 * @param inputs - The `inputs` parameter is a rest parameter that allows you to pass in multiple
 * arguments to the `cn` function. These arguments can be strings or objects representing CSS classes.
 * @returns The `cn` function is returning the result of calling the `twMerge` function with the result
 * of calling the `clsx` function with the `inputs` array as arguments.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
