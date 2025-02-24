git filter-repo --invert-paths --commit-callback '
if commit.original_id in {b"{commit_hash}"}:
    commit.skip()
'
