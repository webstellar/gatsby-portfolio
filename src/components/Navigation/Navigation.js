import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./Navigation.styles"

const Navigation = ({ menu }) => (
  <Wrapper>
    <ul>
      {menu.map(Primary =>
        !Primary.parentId ? (
          <li key={Primary.id}>
            <Link to={Primary.id} activeClassName="nav-active">
              {Primary.label}
              {Primary.childItems.nodes.length !== 0 && <div>&#8964;</div>}
            </Link>
            {Primary.childItems.nodes.length !== 0 ? (
              <ul>
                {Primary.childItems.nodes.map(childItems => (
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
