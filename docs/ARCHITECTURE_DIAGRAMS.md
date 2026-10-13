# ARCHITECTURE_DIAGRAMS — CostSeg SI

## 1. Product pillars (frontend scope)

```mermaid
flowchart TD
  root[CostSeg_SI_Website]
  root --> marketing[Marketing_Website]
  root --> hub[Knowledge_Hub]
  root --> tools[Interactive_Tools]
  root --> ui[Shared_UI_System]

  marketing --> m1[Home_Services]
  marketing --> m2[How_It_Works]
  marketing --> m3[Technology_Vision]
  marketing --> m4[Contact_Get_Started]

  hub --> h1[Tax_Laws_IRS]
  hub --> h2[Property_Guides]
  hub --> h3[Assets_CaseStudies]
  hub --> h4[Search_Filters_Related]
  hub --> h5[Future_CMS_API]

  tools --> t1[Questionnaire]
  tools --> t2[Workflow_Explorer]
  tools --> t3[Calculator_Optional]
  tools --> t4[Future_Backend_Services]

  ui --> u1[Design_Tokens_Components]
  ui --> u2[Responsive_Nav_BottomNav]
  ui --> u3[Loaders_Skeletons]
  ui --> u4[Accessibility_SEO]
```

## 2. Frontend runtime structure

```mermaid
flowchart TB
  browser[Browser]
  next[Nextjs_App_Router]
  rsc[React_Server_Components]
  client[Client_Islands]
  content[Typed_Content_MDX_JSON]
  stub[Stub_API_Routes]

  browser --> next
  next --> rsc
  next --> client
  rsc --> content
  client --> stub
```

## 3. Content flow (knowledge hub)

```mermaid
flowchart LR
  author[Author_or_Client_Draft]
  model[Typed_Content_Model]
  review[Tax_Legal_Review]
  publish[Publish_Flag]
  template[Reusable_Template]
  page[Public_Page]

  author --> model --> review --> publish --> template --> page
```

Unreviewed content must remain `reviewStatus: draft` / not linked for indexing.

## 4. Lead form — present vs future

```mermaid
flowchart LR
  form[Form_UI_RHF_Zod]
  adapter[submitLead_Adapter]
  mock[Mock_Success]
  api[Future_API]
  crm[Email_or_CRM]

  form --> adapter
  adapter --> mock
  adapter -.-> api
  api -.-> crm
```

## 5. Super Intelligence presentation (marketing, not live ops)

```mermaid
flowchart LR
  ingest[Document_Ingestion]
  classify[Classification]
  estimate[Cost_Estimation]
  qa[Quality_and_Review]
  ingest --> classify --> estimate --> qa
```

Label UI as explanatory / proposed multi-agent workflow unless client confirms operational status.

## 6. Deployment boundary

```mermaid
flowchart LR
  local[Local_Dev]
  staging[Staging_Host]
  review[Client_QA]
  vps[Client_VPS_Production]

  local --> staging --> review
  review -->|explicit_prod_approval| vps
```

Production deploy requires **separate explicit approval** beyond Phase 9 staging.
