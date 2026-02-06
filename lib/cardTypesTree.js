const RULES = {
  Attack: ["AI", "Routine", "Signature", "True Wish", "Special Attack", "Trait Attack"].sort(),
  BP: ["BP", "Trap"],
  Technology: ["Structural", "Argo Ability", "Production Facility", "Core"].sort(),
};

const take = (set, values) =>
  values.filter(v => set.has(v));

// build tree
const convertTypesToTree = (types) => {
  const remaining = new Set(types);
  const tree = [];

  // Attack
  const attackChildren = take(remaining, RULES.Attack);
  if (attackChildren.length) {
    attackChildren.forEach(t => remaining.delete(t));
    tree.push({
      label: "Attack",
      children: attackChildren.map(t => ({ label: t, value: t })),
    });
  }

  // Technology
  const techChildren = take(remaining, RULES.Technology);
  if (techChildren.length) {
    techChildren.forEach(t => remaining.delete(t));
    tree.push({
      label: "Technology",
      children: techChildren.map(t => ({ label: t, value: t })),
    });
  }

  // everything else = flat
  [...remaining].forEach(t => {
    tree.push({ label: t, value: t });
  });

  return tree.sort((a, b) => a.label.localeCompare(b.label) );
};


module.exports = {
    convertTypesToTree
};