import eventBase from '@/eventBase';

export default function goToPage(pageName, pageParams) {
  eventBase.$emit('goToPage', pageName, pageParams)
}
