import Node from '../core/Node';

function getCraftConfig(componentName, props, editor) {
  const config = {
    defaultProps: {},
    rules: {},
    addition: {},
  };

  let resolver;
  if (componentName === 'Canvas') {
    resolver = editor.findResolver(props.component);
  } else {
    resolver = editor.findResolver(componentName);
  }

  if (resolver.craft) {
    Object.keys(config).forEach((key) => {
      if (resolver.craft[key]) {
        config[key] = structuredClone(resolver.craft[key]);
      }
    });
  }

  return config;
}

function createNodeFromVNode(editor, vnode, parentNode = null) {
  const componentName = vnode.type.__name;
  const { props } = vnode;

  // if (componentName === 'Canvas' && vnode.data.attrs) {
  //   props = { ...props, ...vnode.data.attrs };
  // }

  const { rules, addition, defaultProps } = getCraftConfig(componentName, props, editor);
  const nodeProps = { ...defaultProps, ...props };

  const node = new Node(componentName, nodeProps, parentNode, [], rules, addition);

  const vnodeChildren = vnode.children ? vnode.children.default() : null;
  // console.log(vnodeChildren)
  const children = vnodeChildren
    ? vnodeChildren.map((childVNode) => createNodeFromVNode(editor, childVNode, node))
      .filter((childNode) => !!childNode)
    : [];
  node.children = children;

  return node;
}

export default createNodeFromVNode;