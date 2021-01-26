import React, { FC, useState } from 'react'
import { ReactSortable, SortableEvent } from 'react-sortablejs'

import { User } from '~Admin/graphql/user-page'

import { sortLinksMutation } from './graphql/sort-links'
import { LinkItem } from './LinkItem'

type Props = {
  page: User['page']
}

export const SortableLinks: FC<Props> = ({ page }) => {
  const [sortLinks] = sortLinksMutation()
  const [links, setLinks] = useState(page.links)

  const onDragEnd = async (evt: SortableEvent) => {
    if (evt.oldIndex === evt.newIndex) {
      return
    }

    await sortLinks({
      variables: { linkIds: links.map((link) => link.id) },
    })
  }

  return (
    <ReactSortable list={links} setList={setLinks} onEnd={onDragEnd} handle=".dragable">
      {links.map((link) => (
        <LinkItem key={link.id} link={link} />
      ))}
    </ReactSortable>
  )
}
