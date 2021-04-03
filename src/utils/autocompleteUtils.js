export function filterAutocompleteOptions(
  options,
  params,
  filter,
  currentActiveOptions
) {
  const filtered = filter(options, params);

  const currentActiveNames = currentActiveOptions.map((item) => item.name);

  let unSelectedOptions = filtered.filter(
    (option) => !currentActiveNames.includes(option.name)
  );

  return unSelectedOptions;
}
