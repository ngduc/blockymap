import { parse } from 'query-string';

const { id: idFromUrl } = parse(window.location.search);

export const loadNodes = () => {
  if (!idFromUrl) {
    window.location.href = '/?id=name';
    return {};
  }
  const str = localStorage.getItem(idFromUrl + '-nodes');
  return JSON.parse(str);
};

export const initialNodes = loadNodes() || [
  {
    id: 'Coinbase',
    label: 'Coinbase',
    type: 0
  },
  {
    id: 'Coinbase Pro',
    label: 'Coinbase Pro',
    type: 0
  },
  {
    id: 'Ethereum',
    label: 'Ethereum',
    type: 1
  },
  {
    id: 'Compound',
    label: 'Compound',
    type: 2
  }
];

export const initialEdges = JSON.parse(localStorage.getItem(idFromUrl + '-edges')) || [
  {
    source: 'Coinbase',
    target: 'Ethereum'
  }
];

let savingNodes = false;
let savingEdges = false;

export function saveNodes(nodes) {
  if (savingNodes) {
    return;
  }
  savingNodes = true;
  console.log('--- saving nodes', nodes);
  localStorage.setItem(idFromUrl + '-nodes', JSON.stringify(nodes));
  setTimeout(() => (savingNodes = false), 100);
}

export function saveEdges(edges) {
  if (savingEdges) {
    return;
  }
  savingEdges = true;
  console.log('--- saving edges', edges);
  localStorage.setItem(idFromUrl + '-edges', JSON.stringify(edges));
  setTimeout(() => (savingEdges = false), 100);
}
