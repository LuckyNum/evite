/**
 * 判断是否为外部资源
 */
export const isExternal = (path: string): boolean => /^(https?:|mailto:|tel:)/.test(path)
