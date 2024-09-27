export const segmentCreator = (item) => {
  return item.replace(/\s+/g, "-").toLowerCase();
};

// track params changes
export const handleParamsChange = (
  title,
  name,
  dispatch,
  router,
  pathname,
  searchParams
) => {
  const params = new URLSearchParams(searchParams.toString());

  const currentItems = params.get(title)?.split(",") || [];

  if (currentItems.includes(name)) {
    const updatedItems = currentItems.filter((item) => item !== name);

    if (updatedItems.length === 0) {
      params.delete(title);
    } else {
      params.set(title, updatedItems.join(","));
    }
  } else {
    currentItems.push(name);
    params.set(title, currentItems.join(","));
  }

  router.replace(`${pathname}?${params.toString()}`);

  dispatch;
};

export const handlePriceParamsChange = (
  title,
  name,
  dispatch,
  router,
  pathname,
  searchParams
) => {
  const params = new URLSearchParams(searchParams.toString());

  const paramExists = params.has(title);

  console.log("title", title);

  if (paramExists) {
    params.set(title, name);
  } else {
    // currentItems.push(name);
    params.append(title, name);
  }

  router.replace(`${pathname}?${params.toString()}`);

  dispatch;
};

// get params from url
export const getParams = (searchParams, param, emptyState) => {
  return searchParams.get(param)?.split(",") || emptyState;
};
