import * as htmlToImage from 'html-to-image';

const getTargetElement = (elementId: string): HTMLElement => {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error('找不到目标元素');
  }
  return element;
};

const waitForImages = async (element: HTMLElement): Promise<void> => {
  const images = Array.from(element.getElementsByTagName('img'));
  const loadingImages = images.filter(img => !img.complete);
  
  if (loadingImages.length === 0) return;

  await Promise.all(
    loadingImages.map(img => 
      new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error(`图片加载失败: ${img.src}`));
      })
    )
  );
};

const createDownloadLink = (dataUrl: string, fileName: string): void => {
  const link = document.createElement('a');
  link.download = fileName;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadAsImage = async (elementId: string, fileName: string): Promise<void> => {
  try {
    const element = getTargetElement(elementId);
    await waitForImages(element);

    const originalTransform = element.style.transform;
    element.style.transform = 'scale(1)';

    const dataUrl = await htmlToImage.toPng(element, {
      quality: 1.0,
      pixelRatio: 3,
      cacheBust: true,
      width: 1080,
      height: 1439
    });

    element.style.transform = originalTransform;

    createDownloadLink(dataUrl, fileName);
  } catch (error) {
    console.error('下载图片失败:', error);
    throw new Error(error instanceof Error ? error.message : '下载失败，请重试');
  }
};