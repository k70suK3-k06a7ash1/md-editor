push:
	git add .  && git commit -m 'chore' && git push origin

commit-rm:
	git filter-repo --commit-callback delete_commits.py --force --debug

list:
	bash commit-hash-list.sh
