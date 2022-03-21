import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./Navigation.styles"

const Navigation = ({ menu }) => (
  <Wrapper>
    <ul>
      {menu.map(primary =>
        !primary.parentId ? (
          <li key={primary.id}>
            <Link to={primary.id} activeClassName="nav-active">
              {primary.label}
              {primary.childItems.nodes.length !== 0 && <div>&#8964;</div>}
            </Link>
            {primary.childItems.nodes.length !== 0 ? (
              <ul>
                {primary.childItems.nodes.map(childItems => (
                  <li key={childItems.id}>
                    <Link to={childItems.url} activeClassName="nav-active">
                      {childItems.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ) : null
      )}
    </ul>
  </Wrapper>
)

export default Navigation
