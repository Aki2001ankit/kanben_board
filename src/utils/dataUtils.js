export const groupDataByStatus = (data) => {
  if (!data || !data.tickets) return {};
  const groupedData = {};
  data.tickets.forEach((ticket) => {
    const { status } = ticket;
    if (!groupedData[status]) {
      groupedData[status] = [];
    }
    groupedData[status].push(ticket);
  });
  return groupedData;
};

export const groupDataByUserId = (data) => {
  if (!data || !data.tickets) return {};
  const groupedData = {};
  data.tickets.forEach((ticket) => {
    const { userId } = ticket;
    if (!groupedData[userId]) {
      groupedData[userId] = [];
    }
    groupedData[userId].push(ticket);
  });
  return groupedData;
};

export const groupDataByPriority = (data) => {
  if (!data || !data.tickets) return {};
  const groupedData = {};
  data.tickets.forEach((ticket) => {
    const { priority } = ticket;
    if (!groupedData[priority]) {
      groupedData[priority] = [];
    }
    groupedData[priority].push(ticket);
  });
  return groupedData;
};

export const getUserById = (userId, data) => {
  if (!userId || !data || !data.users) return null;
  const user = data.users.find((user) => user.id === userId);
  return user?.name || null;
};

export const sortByPriority = (groupedData) => {
  if (!groupedData) return {};
  for (const id in groupedData) {
    if (groupedData.hasOwnProperty(id)) {
      const group = groupedData[id];
      if (Array.isArray(group)) {
        group.sort((a, b) => b.priority - a.priority);
      }
    }
  }
  return groupedData;
};

export const sortByTitle = (groupedData) => {
  if (!groupedData) return {};
  for (const id in groupedData) {
    if (groupedData.hasOwnProperty(id)) {
      const group = groupedData[id];
      if (Array.isArray(group)) {
        group.sort((a, b) => a.title.localeCompare(b.title));
      }
    }
  }
  return groupedData;
};

export const sortDataByUserPreference = (
  apiData,
  groupPreference,
  orderPreference
) => {
  if (!apiData || !groupPreference || !orderPreference) return {};
  let groupedData;
  if (groupPreference == "Status") {
    groupedData = groupDataByStatus(apiData);
  } else if (groupPreference == "Users") {
    groupedData = groupDataByUserId(apiData);
  } else {
    groupedData = groupDataByPriority(apiData);
  }

  if (orderPreference == "Priority") {
    return sortByPriority(groupedData);
  }
  return sortByTitle(groupedData);
};
