# Project Brief

These instructions apply to the entire public learner repository unless a more specific `AGENTS.md` exists deeper in the workspace.

## Project overview

- **Project:** AIA Enjoy Building Agent Day
- **Purpose:** Provide Thai-first learner materials for building a small, useful Agent from a daily task.
- **Intended outcome:** Learners can identify a suitable small task, describe the Agent they need, and follow reviewed exercises without exposure to private client or tenant information.

## Goals

- Keep learner instructions practical, beginner-friendly, and low-setup.
- Preserve **Instruction → Knowledge → Tools** and **small task → small Agent → connected workflow**.
- Use only synthetic, public-safe examples and assets.

## Audience

- **Primary audience:** Business users who are beginning with Copilot Studio.
- **Language and tone:** Thai-first, concise, encouraging, and action-oriented.
- **Terminology:** Retain official English Microsoft product names, feature names, and UI labels.

## Deliverables

- Reviewed learner-facing exercises.
- Synthetic/public-safe sample files and downloads required by those exercises.
- **Definition of done:** Instructions, assets, links, and packaging pass public-safety and learner-readiness checks, with environment-dependent capabilities clearly labeled.

## Workspace map

- `exercises/`: Reviewed learner-facing exercise instructions.
- `downloads/`: Synthetic/public-safe files used by the exercises.

## Working conventions

- Reason in English. Use a short daily-life analogy when it materially helps explain complex knowledge.
- Give beginners an early useful result and separate required steps from optional extensions.
- Do not claim that static or file validation proves tenant, connector, license, or production readiness.

## Boundaries

- **In scope:** Public learner instructions and synthetic supporting assets for the confirmed workshop learning direction.
- **Out of scope:** Private planning, internal notes, client records, credentials, tenant configuration, production publishing, and unconfirmed capabilities.
- **Confidentiality and publication:** Exclude private client data, personal or contact data, credentials, tenant details, internal paths, internal notes, and unrelated client names.
- **Approval gates:** Exercise content, downloads, remote merges, and live-platform claims require review appropriate to their risk.

## Git workflow

- **Repository model:** Public child repository used as the private parent workspace's `repo/` submodule.
- **Branch convention:** Use `<type>/<change>` unless explicitly overridden.
- **Remote publication:** Push review branches only when approved; do not merge or publish unreviewed content as final.
- **Submodule order:** Ensure every commit referenced by the private parent exists remotely before updating the parent Gitlink.

## Validation

- Run link, file, formatting, packaging, and public-safety checks appropriate to the changed materials.
- Use `git diff --check` and report the intended working-tree state.
- Render and inspect editable or visual outputs when layout matters.

## Open questions

- The exact exercise set and supporting downloads are not yet confirmed.
- Environment, licensing, Dataverse, connector, governance, and production-publishing readiness remain unconfirmed.

